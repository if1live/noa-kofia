# noa-kofia

[KOFIA](https://www.kofia.or.kr/) data fetcher

[금융투자협회 전자공시서비스](https://dis.kofia.or.kr/)에서 내가 필요한것만 뽑기

![noa](./docs/image.webp)

| status                                                                                                                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![main](https://github.com/if1live/noa-kofia/actions/workflows/main.yml/badge.svg)](https://github.com/if1live/noa-kofia/actions/workflows/main.yml)                   |
| [![schedule](https://github.com/if1live/noa-kofia/actions/workflows/schedule.yml/badge.svg)](https://github.com/if1live/noa-kofia/actions/workflows/schedule.yml) |

## usage

```bash
node cli.ts etf --date 2025-02-03 --data-dir ./data
```

## branch

* [main](https://github.com/if1live/noa-kofia/tree/main)
  * 크롤러 구현

* [data](https://github.com/if1live/noa-kofia/tree/data)
  * CSV (필드 이름은 KRX에 맞춤)

## sheet

[전종목 보수비용](https://github.com/if1live/noa-kofia/blob/data/%EC%A0%84%EC%A2%85%EB%AA%A9_%EB%B3%B4%EC%88%98%EB%B9%84%EC%9A%A9.csv)

* <https://dis.kofia.or.kr> -> 펀드공시 -> 펀드 보수 및 비용
* 펀드명: 상장지수




