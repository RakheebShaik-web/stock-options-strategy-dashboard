# Backtest report

## Headline results

| Metric | Result |
|---|---:|
| Initial capital | INR 500,000.00 |
| Final capital | INR 416,975.46 |
| Net P&L | INR -83,024.54 |
| Return | -16.60% |
| Maximum realized drawdown | 16.61% |
| Trades | 409 |
| Win rate | 22.98% |
| Profit factor | 0.2808 |
| Average R multiple | -0.576 |
| Modeled costs | INR 30,493.40 |

## Chronological holdout

The final 30% of trades begins after `2026-07-16 01:45:00+05:30`. It contains 123 trades, net P&L INR -25,955.25, win rate 22.76%, and profit factor 0.232.

## Long and short results

| side | trades | net_pnl | average_r | win_rate_pct |
| --- | --- | --- | --- | --- |
| long | 197 | -37811.84 | -0.536 | 24.365 |
| short | 212 | -45212.7 | -0.614 | 21.698 |

## Results by symbol

| symbol | trades | net_pnl |
| --- | --- | --- |
| LT | 43 | -12469.99 |
| AXISBANK | 45 | -9903.94 |
| TCS | 38 | -9623.16 |
| SBIN | 41 | -9419.84 |
| HDFCBANK | 45 | -9357.64 |
| INFY | 30 | -9305.91 |
| KOTAKBANK | 48 | -8754.09 |
| RELIANCE | 41 | -4808.64 |
| ICICIBANK | 34 | -4798.6 |
| ITC | 44 | -4582.73 |

## Data quality

- Coverage: 2026-05-19 09:15:00+05:30 to 2026-08-10 15:15:00+05:30
- Bars: 43,371 across 10 symbols
- Duplicate symbol/timestamps: 0
- Missing values: 0
- Invalid OHLC bars: 0
- Zero-volume bars: 571

## Important limitations

- This is a hypothetical historical simulation and does not guarantee future performance.
- Yahoo intraday history covers only a recent sample and is not exchange-grade data.
- Position sizing uses fixed initial capital per trade; simultaneous portfolio cash/margin constraints are not enforced.
- Overnight naked short cash-equity positions are generally not a valid retail delivery workflow in India; short results are research-only.
- Equity and drawdown are based on realized exits, not mark-to-market open positions.
- Costs use a basis-point approximation rather than a date-specific Indian brokerage/tax ledger.
- Five-minute OHLC cannot reveal intrabar event order; when stop and target both touch, the stop is assumed first.

This material is for research and educational purposes only, not investment advice.
