'use client'

import { LegalPage } from '@/components/legal-page'
import { Gavel } from 'lucide-react'

export default function TermsAndConditions() {
  return (
    <LegalPage
      icon={Gavel}
      badge="Service Level Agreement"
      title="Terms and"
      highlight="Conditions"
      intro="Standard operating procedures and legal framework governing the partnership between Neoplas Fintech Private Limited and its valued Sub-Users."
      lastUpdated="January 2024"
      sections={[
        {
          heading: 'Certain Definitions',
          paragraphs: [
            'Key terms used throughout this agreement are defined as follows to ensure clarity and mutual understanding between the parties.',
          ],
          bullets: [
            'Agreement: Includes this agreement, all its schedules, amendments made from time to time, and all related documents.',
            'Applicable Law: All applicable Indian statutes, enactments, acts, laws, ordinances, rules, and regulations.',
            'Chargebacks: Reversal of any transaction made by Service Provider\'s Subscriber due to forgery, duplicate processing, or fraudulent use.',
            'Customer(s): Persons or entities availing services through the SUB-USER using USER\'s products.',
            'Compliance: Regulatory requirements, ethical practices, KYC, and AML finance regulations.',
            'Effective Date: The date of signing or acceptance of this Agreement by the Parties.',
            'Intellectual Property: Software, code, trademarks, service marks, logos, and all depictions or representations thereof.',
            'Product: Set of services permitting money transfer, POS, Mobile Apps, and value-added services.',
            'Force Majeure: Accidents, acts of war, catastrophes, or significant adverse events beyond control.',
            'Fraud: Theft or falsification of identity, accounts, credentials, or actual events.',
            'Software: Custom-built software owned by Neoplas Fintech Private Limited or licensed from third-party suppliers.',
            'Sub-Users: Individuals or entities appointed by the User to facilitate Products disbursement.',
          ],
        },
        {
          heading: 'Scope of Services',
          paragraphs: [
            'The USER hereby agrees to facilitate the services of Neoplas Fintech Private Limited to the SUB-USER and the SUB-USER hereby agrees to avail the Services. The SUB-USER will not undertake any activity that violates any provision of law.',
            'The SUB-USER shall primarily act as a conduit for receiving and delivering small value remittances through Aadhar-based payments and other agreed payment instruments.',
            'The SUB-USER agrees to perform all roles, responsibilities, and functions specified. USER reserves the right to vary the Services with written advice, which becomes effective immediately.',
          ],
        },
        {
          heading: 'Intellectual Property',
          paragraphs: [
            'All intellectual property rights to Technology and Copyrights remain the property of Neoplas Fintech Private Limited. Trademarks belong exclusively to Neoplas Fintech Private Limited.',
            'The SUB-USER agrees not to sell, license, distribute, copy, modify, or create derivative works from the Materials or Neoplas Fintech Private Limited\'s IP. Reverse engineering or disassembling any part of the software is strictly prohibited.',
          ],
        },
        {
          heading: 'Payment Mechanism',
          paragraphs: [
            'All payments and settlements between the parties shall be made in accordance with the Schedule of Charges. This schedule fluctuates based on market conditions and will be updated at USER\'s sole discretion.',
          ],
        },
        {
          heading: 'Settlement Process',
          paragraphs: [
            'USER shall provide an electronic report (MIS) via an online portal containing transaction amounts, dates, and response codes. The SUB-USER must maintain a sufficient balance to enable smooth transaction processing.',
            'In case of discrepancies, both parties will provide best efforts to settle through mutual investigation within 30 working days.',
          ],
        },
        {
          heading: 'Sub-User Obligations',
          paragraphs: [
            'The SUB-USER is solely liable for the acts of any further Sub-Users. It must manage cash on the field and ensure availability at outlets. The SUB-USER assumes all risks associated with cash handling at the ground level.',
          ],
          bullets: [
            'Sub-Users will not engage in any activity violating laws pertaining to gaming, gambling, or betting.',
            'Services will not be provided in Telangana, Odisha, and Assam for monies-based competitions.',
            'Maintain accurate transaction records and comply with all regulatory reporting requirements.',
            'Ensure all customers complete KYC verification before providing services.',
          ],
        },
        {
          heading: 'Liability & Indemnity',
          paragraphs: [
            'Neoplas Fintech Private Limited shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from the use or inability to use the Services.',
            'The SUB-USER agrees to indemnify and hold harmless Neoplas Fintech Private Limited from any claims, losses, or damages arising from the SUB-USER\'s breach of this agreement or violation of applicable laws.',
          ],
        },
        {
          heading: 'Fraud & Anti-Bribery',
          paragraphs: [
            'Both parties commit to maintaining the highest standards of integrity and compliance with all anti-fraud and anti-bribery laws.',
          ],
          bullets: [
            'Neoplas Fintech Private Limited has the right to investigate any suspected fraudulent activity.',
            'SUB-USER must report any suspected fraud immediately to Neoplas Fintech Private Limited.',
            'Any violation of anti-bribery laws will result in immediate termination of services.',
            'Compliance with the Foreign Corrupt Practices Act (FCPA) and Indian Prevention of Corruption Act is mandatory.',
          ],
        },
        {
          heading: 'Termination',
          paragraphs: [
            'Either party may terminate this agreement upon 30 days written notice if the other party materially breaches its obligations and fails to cure within 15 days of receiving notice.',
            'Neoplas Fintech Private Limited may terminate immediately if the SUB-USER engages in fraud, illegal activity, or poses a regulatory risk.',
            'Upon termination, all outstanding balances must be settled, and all materials belonging to Neoplas Fintech Private Limited must be returned immediately.',
          ],
        },
      ]}
    />
  )
}
