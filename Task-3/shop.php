<?php 
session_start();

$products = [
    ["id" => "1", "name" => "Shoes", "price" => "1000"],
    ["id" => "2", "name" => "Jacket", "price" => "2000"],
    ["id" => "3", "name" => "Belt", "price" => "5000"]
];

if (!isset($_SESSION["cart"])) {
    $_SESSION["cart"] = [];
}

if (isset($_POST["product_id"])) {
    $id = $_POST["product_id"];
    $_SESSION["cart"][] = $id;
}

foreach ($products as $product) {
    echo "Id is " . $product["id"] . "</br>";
    echo "Name is " . $product["name"] . "</br>";
    echo "Price is " . $product["price"] . "</br>";
    ?>
    <form method="POST">
       <input type="hidden" name="product_id" value="<?php echo $product["id"]; ?>"/>
       <button type="submit">Add to Cart</button>
    </form>
    <?php
}
?>