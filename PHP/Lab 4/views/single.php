<?php
    $index=isset($_GET["id"])?$_GET["id"]:"";
    $items=$db->get_all_records();
?>


<div class="wrapper">
  <div class="product-img">
    <img src="./views/images/<?= $items[$index]["photo"] ?>">
  </div>
  <div class=product-info>
    <div class=product-text>
      <h1><?= $items[$index]["product_name"] ?></h1>
      <ul>
        <li>Type: <?= $items[$index]["product_name"] ?></li>
        <li>Code: <?= $items[$index]["product_code"] ?></li>
        <li class=product-price-btn>Price: <?= $items[$index]["list_price"] ?></li>
        <li>Rating: <?= $items[$index]["rating"] ?></li>
      </ul>
    </div>
  </div>
</div>



    