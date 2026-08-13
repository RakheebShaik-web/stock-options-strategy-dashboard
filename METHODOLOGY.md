# Methodology and accuracy notes

## Evidence window

The dashboard summarizes the latest saved cash-stock backtest covering 19 May 2026 through 10 August 2026. The input contains 43,371 five-minute bars across ten NSE symbols: RELIANCE, TCS, SBIN, HDFCBANK, ICICIBANK, INFY, ITC, LT, AXISBANK, and KOTAKBANK.

The data-quality audit found no duplicate symbol/timestamps, missing values, or invalid OHLC bars. It found 571 zero-volume bars. Yahoo intraday data is suitable for pipeline validation, but it is not exchange-grade and is not sufficient evidence of a durable trading edge.

## Strategy rules represented

- Opening range: 09:15 and 09:20 completed candles.
- Long signal: RSI(14) crosses above 60, volume exceeds the previous candle, and close exceeds the opening-range high.
- Short signal: RSI(14) crosses below 40 with the same volume test and close below the opening-range low.
- Entry: signal-candle high or low stop, valid for three following bars.
- Stop: opposite side of the signal candle.
- Target: 1.5 times initial risk.
- Maximum one filled trade per symbol per day.
- Conservative intrabar rule: stop is applied before target when both touch within one candle.
- Modeled friction: 5 basis points of slippage plus 3 basis points of cost per side.

## Accuracy controls

The metrics shown in the dashboard are transcribed from `data/summary.json` and the generated report. Symbol results are sourced from the generated report and reconcile to total net P&L, subject to displayed rounding. The complete trade and equity ledgers are included for independent reproduction and review.

## Material limitations

- The sample is approximately 60 trading days and spans too few market regimes.
- Yahoo data may differ from licensed exchange-grade candles.
- Portfolio-wide cash, margin, and simultaneous-position constraints are not enforced.
- Equity and drawdown are calculated from realized exits rather than mark-to-market open positions.
- Historical taxes and brokerage are approximated with basis points.
- Five-minute OHLC bars cannot reveal true intrabar ordering or bid/ask spreads.
- Overnight gaps can create worse fills than candle-level stop simulations.
- Overnight naked short cash-equity positions are generally not a valid retail delivery workflow in India.
- A fixed current universe can introduce survivorship bias.

## Reconsideration gates

Before paying for recurring data access or considering live deployment:

1. Run a multi-year walk-forward test with untouched future validation windows.
2. Require profit factor above 1.2 after realistic costs and adverse slippage.
3. Require positive results across multiple symbols and market regimes.
4. Enforce portfolio capital, margin, liquidity, gap, and execution constraints.
5. Confirm results are not dependent on one parameter combination.

## Subscription fact

Dhan states that its Data API subscription costs INR 499 plus applicable taxes and renews every 30 days. Source: https://dhan.co/support/platforms/dhanhq-api/how-does-the-dhanhq-data-api-subscription-work/

This material is for research and team discussion only and is not investment advice.
