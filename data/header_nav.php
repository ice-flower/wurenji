<?php
require("init.php");
$sql="SELECT * FROM header_nav";
echo json_encode(sql_select($sql));
