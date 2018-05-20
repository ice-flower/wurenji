SET NAMES UTF8;
DROP DATABASE IF EXISTS wurenji;
CREATE DATABASE wurenji CHARSET="UTF8";
USE wurenji;

/*导航条*/
CREATE TABLE header_nav(
    hid INT PRIMARY KEY AUTO_INCREMENT,
    htit VARCHAR(16),
    href VARCHAR(64)
);
INSERT INTO header_nav VALUES
(null,"首页","#"),
(null,"所有商品","#"),
(null,"城市动态","#"),
(null,"关于我们","#"),
(null,"线下门店","#");
