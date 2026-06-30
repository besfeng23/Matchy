import "server-only";
import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.string().url().default("http://localhost:3000"),
  SUPABASE_URL: z.string().url().optional(),
  SUPABASE_ANON_KEY: z.string().optional(),
  SUPABASE_SERVICE_ROLE_KEY: z.string().optional(),
  DATABASE_URL: z.string().optional(),
  YOURSAFE_API_KEY: z.string().optional(),
  YOURSAFE_WEBHOOK_SECRET: z.string().optional(),
  SMTP_HOST: z.string().optional(),
  SMTP_PORT: z.coerce.number().int().positive().optional(),
  SMTP_USER: z.string().optional(),
  SMTP_PASSWORD: z.string().optional(),
  SMTP_FROM: z.string().optional(),
  PANDORA_BASE_URL: z.string().url().optional(),
  PANDORA_INTERNAL_TOKEN: z.string().optional(),
  PANDORA_NAMESPACE: z.string().default("matchy_alpha"),
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
});

export type ServerEnv = z.infer<typeof envSchema>;

const productionRequiredKeys: Array<keyof ServerEnv> = [
  "SUPABASE_URL",
  "SUPABASE_ANON_KEY",
  "SUPABASE_SERVICE_ROLE_KEY",
  "DATABASE_URL",
  "YOURSAFE_API_KEY",
  "YOURSAFE_WEBHOOK_SECRET",
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASSWORD",
  "SMTP_FROM",
  "PANDORA_BASE_URL",
  "PANDORA_INTERNAL_TOKEN",
];

export function getServerEnv(): ServerEnv {
  const parsed = envSchema.parse(process.env);

  if (parsed.NODE_ENV === "production") {
    const missing = productionRequiredKeys.filter((key) => parsed[key] === undefined || parsed[key] === "");

    if (missing.length > 0) {
      throw new Error(`Missing production environment variables: ${missing.join(", ")}`);
    }
  }

  return parsed;
}

export function getSafeRuntimeStatus() {
  const env = getServerEnv();

  return {
    app: "matchy-web",
    nodeEnv: env.NODE_ENV,
    configured: {
      supabase: Boolean(env.SUPABASE_URL && env.SUPABASE_ANON_KEY),
      database: Boolean(env.DATABASE_URL),
      yoursafe: Boolean(env.YOURSAFE_API_KEY && env.YOURSAFE_WEBHOOK_SECRET),
      smtp: Boolean(env.SMTP_HOST && env.SMTP_USER && env.SMTP_FROM),
      pandora: Boolean(env.PANDORA_BASE_URL && env.PANDORA_INTERNAL_TOKEN),
    },
  };
}
