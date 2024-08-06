import http from 'k6/http';
import { sleep } from 'k6';
import { check } from 'k6';

// Parameters for the test
const url = 'https://api.admin.u-code.io/v2/menus?parent_id=31a96049-cfcf-4ce3-ab24-daad388cd595';
const headers = {
  'Accept': 'application/json, text/plain, */*',
  'Accept-Encoding': 'gzip, deflate, br, zstd',
  'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7,uz;q=0.6',
  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRfcGxhdGZvcm1faWQiOiIiLCJjbGllbnRfdHlwZV9pZCI6Ijg0M2FjM2Y1LWYwMjMtNDdkYy1hNDM3LTg5MThiNTM0YWMyNSIsImRhdGEiOiJhZGRpdGlvbmFsIGpzb24gZGF0YSIsImV4cCI6MTcyMzAxNDk3MSwiaWF0IjoxNzIyOTI4NTcxLCJpZCI6ImZiYmJkZWIyLTI0NDQtNGExYy1hMWM4LTkzZTlmNzYwMjBiNSIsImlwIjoiYWRkaXRpb25hbCBqc29uIGRhdGEiLCJsb2dpbl90YWJsZV9zbHVnIjoidXNlciIsInByb2plY3RfaWQiOiI0MmFiMDc5OS1kZWZmLTRmOGMtYmYzZi02NGJmOTY2NWQzMDQiLCJyb2xlX2lkIjoiNDdmNDgxY2ItMTk3OS00ZWIzLWFmZTgtMTVmYjBkMGY1NTJlIiwidGFibGVzIjpbXSwidXNlcl9pZCI6IjhhMjBkOWEwLTk4YmUtNDY1Yy1iNzFjLTIwYjY4ODkwNzNmNyJ9.YO6RFyQeYNDotyg0aoe-35hSgVoZljav_NQtj04vRhg',
  'Environment-Id': '768fdf6e-f88d-459b-86ad-9e4e7808148e',
  'Origin': 'https://app.u-code.io',
  'Priority': 'u=1, i',
  'Referer': 'https://app.u-code.io/',
  'Resource-Id': 'a274d5ab-10ef-4f2e-8234-6b802739c461',
  'Sec-Ch-Ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
  'Sec-Ch-Ua-Mobile': '?0',
  'Sec-Ch-Ua-Platform': '"Linux"',
  'Sec-Fetch-Dest': 'empty',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Site': 'same-site',
  'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'
};

// Options for the test
export const options = {
  scenarios: {
    constant_request_rate_100: {
      executor: 'constant-arrival-rate',
      rate: 100,
      timeUnit: '1s', // 100 RPS
      duration: '100s',
      preAllocatedVUs: 50,
      maxVUs: 100,
    },
    constant_request_rate_500: {
      executor: 'constant-arrival-rate',
      rate: 500,
      timeUnit: '1s', // 500 RPS
      duration: '100s',
      startTime: '110s',
      preAllocatedVUs: 200,
      maxVUs: 500,
    },
    constant_request_rate_700: {
      executor: 'constant-arrival-rate',
      rate: 700,
      timeUnit: '1s', // 700 RPS
      duration: '100s',
      startTime: '220s',
      preAllocatedVUs: 350,
      maxVUs: 700,
    },
    constant_request_rate_1000: {
      executor: 'constant-arrival-rate',
      rate: 1000,
      timeUnit: '1s', // 1000 RPS
      duration: '100s',
      startTime: '330s',
      preAllocatedVUs: 500,
      maxVUs: 1000,
    },
  },
};

export default function () {
  const res = http.get(url, { headers: headers });
  check(res, { 'status was 200': (r) => r.status === 200 });
  sleep(1);
}

