import { Telegraf, TelegrafContext } from "telegraf-ts";

const { TELEGRAM_BOT_TOKEN } = process.env;

const bot = new Telegraf(TELEGRAM_BOT_TOKEN || "");

bot.start(
  async (ctx: TelegrafContext) =>
    await ctx.reply(ctx.message?.from?.first_name || "Message !")
);

bot.hears("hi", async (ctx: TelegrafContext) => await ctx.reply("Hello!"));

export default bot;
