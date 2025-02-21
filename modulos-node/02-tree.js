const fs = require('node:fs')

const files = fs.readdirSync(__dirname, { recursive: true })


for (const file of files) {
    const fileDeep = file.split("/").length
    const result =  "   ".repeat(fileDeep)+"├──"+ file.split("/")[fileDeep - 1]
    console.log(result)
}
