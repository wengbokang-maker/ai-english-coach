# 每日督学自动化配置

## 工作原理

通过 WorkBuddy 的自动化功能，每天在固定时间推送学习任务提醒，确保不断更。

---

## 自动化内容

**触发时间：** 每天 18:30

**推送内容：**
```
📚 Marnie 的英语学习任务来了！

今天是 Day [X]/90，坚持就是胜利！

今日任务：
1. AI 口语陪练 15 分钟（豆包语音模式）
2. 发音练习：用「发音修正 Prompt」练习今天遇到的难词
3. 学习日志：完成结构化总结

完成后提交格式：
Today I learned: [你学了什么]
One new sentence I can use: [一个新句子]
My question: [一个问题或困惑]
```

---

## 如何在 WorkBuddy 中配置

> 注：以下配置适用于 WorkBuddy 桌面端

1. 打开 WorkBuddy → 自动化管理
2. 创建新自动化：
   - 名称：英语督学每日提醒
   - 触发：每天 18:30（RRULE: DAILY）
   - Prompt：上方推送内容

---

## 学习日志格式（每日必填）

每次完成学习后，提交以下格式的总结：

```
Today I learned: [具体学了什么，如：how to use "actually" correctly]
One new sentence I can use: [一个可以马上用的句子]
My question: [今天的困惑或想深入的问题]
```

WorkBuddy 的 `english-learning-notes` skill 会自动把这个总结转成 HTML 笔记保存。

---

## 学习日志自动生成效果

提交总结后，会自动生成这样的 HTML 笔记文件：

```
c:/Users/[用户名]/WorkBuddy/Claw/英语学习笔记/Day{XX}-{日期}.html
```

包含：
- 学习内容总结
- 新句型高亮
- 问题追踪
- 学习连续天数统计
