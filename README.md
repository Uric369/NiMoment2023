# NiMoment2023
上海交通大学网络信息管理部（NIMO）2023年度业务报告（首次发布）

## Features
- 展示年度业务数据
- 展示个人业务数据
- 展示个人年度成就
- 实现动态UI
- 优化用户交互体验

## UI设计与交互体验
- 首页
   - 跟随鼠标视差滚动
   - 呼吸文字效果，打字机动画，同时加载数据
- 部门数据界面
   - 飞船降落视差滚动
   - message进入视口后延迟弹出
   - 查看消息
- 个人数据界面
   - 动态UI（组件呼吸、旋转效果）
   - 数字攀升计数
   - 昼夜切换，白天/黑夜响应按钮
- 个人成就界面
   - 视觉冲击卡片

## 效果展示
详见 [视频展示](https://github.com/Uric369/NiMoment2023/blob/acd2093da9b8a167a8d26e838adcad47616c2f08/Video%20Display.mp4)

1. 首页

![image](https://github.com/Uric369/NiMoment2023/blob/40e50ca751209d74f0b697b527cefe3fcfb6f697/GIF%20display/1.gif)

2. 部门数据界面
   
![image](https://github.com/Uric369/NiMoment2023/blob/40e50ca751209d74f0b697b527cefe3fcfb6f697/GIF%20display/2.gif)

3. 个人数据界面
   
![image](https://github.com/Uric369/NiMoment2023/blob/40e50ca751209d74f0b697b527cefe3fcfb6f697/GIF%20display/3.gif)

![image](https://github.com/Uric369/NiMoment2023/blob/40e50ca751209d74f0b697b527cefe3fcfb6f697/GIF%20display/4.gif)

4. 个人年度成就
   
![image](https://github.com/Uric369/NiMoment2023/blob/40e50ca751209d74f0b697b527cefe3fcfb6f697/GIF%20display/5.gif)

5. 尾页

## 安装与运行程序

克隆项目

```
> $ git clone https://github.com/Uric369/NiMoment2023.git
```

进入React项目目录下安装依赖包

```
> $ npm install
```

在React项目目录下运行前端

```
> $ npm run start
```

发布项目文件命令

```
> $ npm run build
```

执行完`npm run start`命令后，打开浏览器 `http://localhost:3000/`查看项目
