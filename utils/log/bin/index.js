#! /usr/bin/env node
const log = require("npmlog");

log.level = process.env.LOG_LEVEL || "info";

// 定制log的level参数
log.addLevel("success", 2000, { fg: "red", bg: "yellow", bold: true });

log.heading = "xiaozhu";

// 参数: (名称,权重,配置)
log.headingStyle = { fg: "red", bg: "yellow", bold: true };

// 定制log的前缀
log.heading = "xiaozhu";

// log前缀的样式
log.headingStyle = { fg: "blue", bg: "green", bold: true };

module.exports = log;
