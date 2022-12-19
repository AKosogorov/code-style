export function mockRequest () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) resolve()

      reject(new Error('Не удалось получить ответ от сервера'))
    }, 2000)
  })
}
