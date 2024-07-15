import { Page } from "@playwright/test"
import { Section } from "./section"

export class Icrc25SupportedStandardsSection extends Section {
  constructor(public readonly page: Page) {
    super(page, "icrc25_supported_standards")
  }
}