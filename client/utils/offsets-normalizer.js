export default function (offsets) {
    if (offsets) {
        return offsets.map((value) => value >= 0 ? value : 0)
    } else {
        return [0]
    }
}
