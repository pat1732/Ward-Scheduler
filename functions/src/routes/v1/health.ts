import { Router } from "express";

const router = Router();

router.get("/health", (_req, res) => {
  const now = new Date();
  res.json({
    status: "ok",
    service: "ward-scheduler-api",
    // แสดงเวลาไทยแบบคนอ่านง่าย (ไม่เป๊ะเท่า libs แต่พอสำหรับ health)
    timestamp: now.toLocaleString("th-TH", { timeZone: "Asia/Bangkok", hour12: false }),
  });
});

export default router;

