//Object manipulation

const product = new Object;

//Create/update attribute (dot/bracket)
product.name = "Chair";
product.value = 220;
product["brand"] = "Generic";

//Delete attribute (dot/bracket)
delete product.value;
delete product["brand"];