export function decimetersToMeters(decimeters:number) {
    if (typeof decimeters !== 'number') {
        return "The height value must be a number.";
    }
    return decimeters / 10;
}