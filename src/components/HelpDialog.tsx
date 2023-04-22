import React from "react";
import Dialog from "./Dialog";

export default function HelpDialog({
  show,
  close,
}: {
  show: boolean;
  close: () => void;
}) {
  const qrcodeUrl =
    "https://ai.aiomni.top/addons/wike_chatgpt/public/static/storage/20230420/e2c81c1e1fcef6c1874cf1313492a233.jpg";

  return (
    <Dialog header="Auto-GPT 无限可能性的人工智能程序 🤖" isShown={show} close={close}>
      <div className="text-md relative flex-auto p-2 leading-relaxed">
        <p>
          Auto-GPT 是一个展示了人工智能无限可能性的程序，它可以帮你完成各种任务，包括写商业项目、专业高质量文案输出、设计网站、发现流行话题和更多。Auto-GPT 可以访问互联网上的数据，具有长期和短期记忆，使用 GPT-4 或 GPT-3.5 生成高质量的文本，并且可以存储和总结文件。使用 Auto-GPT，您可以更高效地完成工作和学习，并且获得最新的信息和趋势。！📲
        </p>
        <p className="mt-2">
          关注微信公众号：
          <a href="https://ai.aiomni.top/addons/wike_chatgpt/public/static/storage/20230420/e2c81c1e1fcef6c1874cf1313492a233.jpg">
            洛林AI互联
          </a>
        </p>
        <div className="mt-4 flex w-full items-center justify-center gap-5">
          <div className="relative cursor-pointer">
            <img
              src={qrcodeUrl}
              alt="洛林AI互联"
              width={100}
              height={100}
            />
            <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-sm font-medium text-center">
              关注我们的微信公众号
            </p>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
