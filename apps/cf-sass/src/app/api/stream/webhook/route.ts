// subscribe to cloudflare stream webhook events

import Cloudflare from 'cloudflare';

import { getSessionFromCookie } from "@/utils/auth";
import { NextRequest } from 'next/server';
import { redirect } from "next/navigation";
import x from "@/utils/handleResults";

const corsHeaders = {
  "Access-Control-Expose-Headers": "Location",
  "Access-Control-Allow-Headers": "*",
  "Access-Control-Allow-Origin": "*",
};

