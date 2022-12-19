function refreshArr (arr, newArr) {
  arr.length = 0
  arr.push(...newArr)
}

// Удаляет элемент из массива.
// cb - коллбэк для кастомного поиска индекса в массиве.
// Если его не передать, будет поиск по id.
function spliceBy (val, arr, cb = null) {
  const i = cb ? cb(arr, val) : arr.findIndex(item => item.id === val)
  if (i === -1) return
  arr.splice(i, 1)
}

export {
  refreshArr,
  spliceBy
}
