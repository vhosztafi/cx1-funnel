# UAT Motor Trade options snapshot

This supplementary resource was downloaded at the user's request for inclusion in the handover package. It records the supplied UAT feed at retrieval time; it is not evidence of historical production data.

## Source and integrity

| Property | Value |
|---|---|
| Source | [Motor Trade Road Risks UAT options feed](https://clegggiffordcoverxwebapi-uat.magiclick.net/funnel/motortrade-roadrisks/options) |
| Bundled resource | [Download the JSON snapshot](./motortrade-roadrisks-options-2026-09-10.json) |
| Retrieved (UTC) | 2026-09-10T07:30:11.404Z |
| HTTP status | 200 |
| Content type | application/json; charset=utf-8 |
| Size | 156992 bytes |
| SHA-256 | `b79d995c5a10ddd73ab80e2221db8ced573715e3fb166f04057ea694d557ed12` |
| Top-level collections | 52 |

The JSON contains the unmodified response body bytes delivered by the HTTP client. No labels, IDs, rows, ordering, metadata or nested structures have been synthesized, normalized or removed. No authentication credentials were supplied.

## Relationship to the handover

- Entry point: [Document 04 — LLM Implementation Handoff](../04-llm-implementation-handoff.md#supplementary-external-resources).
- Related contracts: [Dynamic Options and Repository-Resolved Transforms](../03-questions-and-business-rules.md#dynamic-options-and-repository-resolved-transforms), including OPT-MT-01–72 and SHR-MT-R01.
- Historical evidence limitation: [CLR-001](../clarifications.md#clarification-register) describes the absence of option rows from the original inspected repository. This later UAT capture supplements the package; it does not retroactively resolve that limitation or amend canonical rules.
- Runtime use: [UAT options consumer](../../../src/development/uat-options.ts) reads the live URL. This bundled snapshot is for handover and offline reference; it is not wired in as a runtime fallback.

Preserve primitive IDs and metadata when consuming this file. The collection inventory below describes this capture only. A later response may differ; capture it under a new dated filename and record its own retrieval time and checksum rather than silently replacing this snapshot.

## Collection inventory

Counts are top-level array lengths; nested excesses, configuration bands and other metadata remain in the JSON.

| Collection | Rows |
|---|---:|
| `proposerTitles` | 10 |
| `coverLevels` | 3 |
| `aadDriverMinAge` | 4 |
| `aadDriverMaxAge` | 2 |
| `aadMaxVehicleGrouping` | 5 |
| `aadMaxVehicleGvw` | 5 |
| `aadMaxMotorcycleCc` | 6 |
| `demonstrationCovers` | 4 |
| `companyTypes` | 4 |
| `youngDriverIndemnityLimit` | 4 |
| `youngDriverConfiguration` | 4 |
| `driverClaimStatuses` | 4 |
| `driverClaimTypes` | 9 |
| `driverCCJStatuses` | 3 |
| `driverExperienceBasedExcesses` | 2 |
| `driverExperienceBasedVehicleCCLimits` | 3 |
| `driverCriminalConvictionCodes` | 304 |
| `driverGVWLimits` | 5 |
| `driverLicenceTypes` | 11 |
| `driverMaxABIGroups` | 5 |
| `driverMotorcycleCovers` | 6 |
| `driverMTConvictionCodes` | 78 |
| `driverPlans` | 3 |
| `driverRelationshipsPolicyHolder` | 5 |
| `driverTitles` | 10 |
| `driverTradeEmploymentBasises` | 2 |
| `driverUsages` | 2 |
| `excessLates` | 5 |
| `indemnityCustomerVehicles` | 8 |
| `indemnityOwnVehicles` | 17 |
| `mtOccupations` | 37 |
| `noClaimBonuses` | 16 |
| `noClaimBonusesEarned` | 5 |
| `noClaimBonusPreviousInsurers` | 22 |
| `noClaimBonusIntroRenewalYears` | 15 |
| `occupations` | 2137 |
| `thirdPartyDamageLimits` | 3 |
| `tradingFroms` | 4 |
| `tradingPremiseTypes` | 6 |
| `customerLoanCoverLevels` | 2 |
| `vehicleKeptOvernightType` | 6 |
| `vehicleOwnerTypes` | 4 |
| `vehicleModifications` | 307 |
| `vehicleStatuses` | 2 |
| `vehicleType` | 46 |
| `windScreenCovers` | 3 |
| `europeanTripCover` | 2 |
| `europeanTripUsage` | 2 |
| `europeanArea` | 2 |
| `marketingConsents` | 2 |
| `marketingMethods` | 4 |
| `carJockeyRadii` | 6 |
