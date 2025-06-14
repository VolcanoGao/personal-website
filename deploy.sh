#!/bin/bash

# 简单的部署脚本

echo "开始部署个人网站..."

# 检查是否安装了必要的工具
if ! command -v zip &> /dev/null; then
    echo "请先安装 zip 工具"
    exit 1
fi

# 创建部署包
echo "创建部署包..."
zip -r website.zip index.html css/ js/ images/

echo "部署包已创建: website.zip"
echo "您可以将此压缩包上传到您选择的网络托管服务"
echo "常见的网络托管服务包括:"
echo "1. GitHub Pages (免费)"
echo "2. Netlify (免费)"
echo "3. Vercel (免费)"
echo "4. Amazon S3 (付费)"
echo "5. 阿里云 OSS (付费)"
echo "6. 腾讯云 COS (付费)"

echo "部署完成!" 