const cats=["Milo","Otis","Garfield"]

function destructivelyAppendCat()
{
    cats.push("Ralph")
}
function destructivelyPrependCat()
{
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat()
{
    cats.pop("Garfield")
}
function  destructivelyRemoveFirstCat()
{
    cats.shift("Milo")
}
function appendCat(name)
{
    return [...cats, "Broom"];
}
function prependCat(name)
{
    return ["Arnold",...cats]
}
function removeLastCat (name)
{
    return cats.slice(0,2)
}
function removeFirstCat(name)
{
    return cats.slice(1)
}