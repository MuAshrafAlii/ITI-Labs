<?php
$current_index =
    isset($_GET["current"]) && is_numeric($_GET["current"])
        ? $_GET["current"]
        : 0;
    $items = $db->get_all_records_paginated([], $current_index);

$next_index =
    $current_index + __RECORDS_PER_PAGE__ < 16
        ? $current_index + __RECORDS_PER_PAGE__
        : 0;
        
$previous_index =
    $current_index - __RECORDS_PER_PAGE__ > 0
        ? $current_index - __RECORDS_PER_PAGE__
        : 12;


if (isset($_GET["search"])) {
    $arrOfProducts = $db->search("product_name", $_GET["search"]);
    $items = $arrOfProducts;
}
if (isset($_GET["delete"])) {
    $allItems = $db->get_all_records();
    $db->delete($allItems[$_GET["delete"]]["id"]);
}
?>



<div id=container><div id=formCont><form action="<?php $_SERVER[
    "PHP_SELF"
]; ?>" method=GET>
    <input type=search name=search placeholder=Product Name>
    <button type=submit>Search</button></form></div>
<div>
<table>
    <tr>
        <th>Item ID</th>
        <th>Name</th>
        <th>Details</th>
        <th>Delete</th>
    </tr>
<?php
    $index = $current_index;
    foreach ($items as $item) {
        echo "<tr><td>" . $item["id"] . "</td>";
        echo "<td>" . $item["product_name"] . "</td>";
        echo "<td><a href='" .
            $_SERVER["PHP_SELF"] .
            "?id=" .
            $index .
            "'>view item</a></td>";
        echo "<td><a href='" .
            $_SERVER["PHP_SELF"] .
            "?delete=" .
            $index .
            "'>delete item</a></td></tr>";
        $index++;
    }
?>
</table>


</div>
<div id=btns>
    <button type=button><a href='<?php $_SERVER[
        "PHP_SELF"
    ]; ?>?current=<?= $previous_index ?>'>Previous</a>
    </button>
    <button type=button><a href='<?php $_SERVER[
        "PHP_SELF"
    ]; ?>?current=<?= $next_index ?>'>Next</a>
    </button>
</div>
</div>