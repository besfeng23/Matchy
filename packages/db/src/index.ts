export type DatabaseHealth = {
  configured: boolean;
  checkedAt: string;
};

export function getDatabaseHealth(configured: boolean): DatabaseHealth {
  return {
    configured,
    checkedAt: new Date().toISOString(),
  };
}
