#! /usr/bin/env node

const importLocal = require("import-local");

// 如果当前项目中的 node_modules 中存在一个脚手架命令，全局的 node 环境中也存在一个脚手架命令的时候
// importLocal会优先使用当前项目的node_modules版本，然后输出log
if (importLocal(__filename)) {
    require("npmlog").info("提示', '正在使用当前项目中 xiaozhu-cli-dev 的版本");
} else {
    // 使用全局下的脚手架命令
    require("../lib")(process.argv.slice(2))
}
