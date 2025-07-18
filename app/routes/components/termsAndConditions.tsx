export default function TermsAndConditions() {
  const SectionHeader = ({ children }) => (
    <h2 className="text-xl font-semibold text-gray-700 mt-8 mb-4">
      {children}
    </h2>
  );

  const TermsList = ({ terms }) => (
    <ol className="list-decimal list-inside space-y-4 text-gray-700">
      {terms.map((term, idx) => (
        <li key={idx}>{term}</li>
      ))}
    </ol>
  );

  const englishTerms = [
    `An applicant, also referred to as an investor, is an individual who joins an investment scheme and is obligated to make regular contributions at fixed intervals to the pooled fund, as stated in the agreement, while complying with the membership terms, rights, and obligations.`,
    `The minimum deposit amount is ₹10,000; there is no upper limit.`,
    `All deposits must be made in the name of <strong>Neststar Capital Private Limited</strong> via Cheque/DD/NEFT/IMPS/RTGS/UPI. The administration will not be responsible for funds sent to personal accounts or paid in cash.`,
    `Applicants must nominate a beneficiary. In the event of unforeseen circumstances (e.g., demise), the maturity amount will be transferred to the nominee’s account.`,
    `The applicant is responsible for safeguarding the deposit receipt.`,
    `Early withdrawals are permitted only upon fulfilling all contractual terms.`,
    `Applicants may be eligible for a collateral-free loan of up to 75% of total contributions during the active investment period, subject to agreement terms, repayment schedules, applicable interest, and regulatory compliance.`,
    `If the applicant discontinues the investment, a surrender will be processed upon request. After deducting 25% of the paid amount, the remaining balance will be refunded within 15 days.`,
    `For investments exceeding ₹5 lakhs, personal accident insurance coverage equal to the investment amount will be provided from the second day until maturity.`,
    `Neststar Capital Private Limited reserves the right to amend these terms at any time without prior notice to align with legal, operational, or business requirements. Revisions become effective upon publication.`,
  ];

  const tamilTerms = [
    `விண்ணப்பதாரர் அல்லது முதலீட்டாளராக அழைக்கப்படுபவர், ஒரு முதலீட்டு திட்டத்தில் தனிநபராக இணைகிறார். அவர், முதலீட்டு நிதி ஒப்பந்தத்தில் குறிப்பிடப்பட்டிருப்பதன்படி, ஒவ்வொரு இடைவேளையிலும் திட்டமிட்ட தொகையை செலுத்தவேண்டும். இது உறுப்பினர் உரிமைகள் மற்றும் கடமைகளுக்கான விதிமுறைகளுக்கு உட்பட்டது.`,
    `குறைந்தபட்ச வைப்பு தொகை ₹10,000 ஆகும். அதிகபட்ச வரம்பு இல்லை.`,
    `அனைத்து வைப்புகளும் <strong>Neststar Capital Private Limited</strong> நிறுவனத்தின் பெயரில் மட்டும், Cheque/DD/NEFT/IMPS/RTGS/UPI வழியாக செலுத்தப்பட வேண்டும். தனிநபர் கணக்கிற்கு அனுப்பப்படும் அல்லது காசாக வழங்கப்படும் நிதிக்கு நிர்வாகம் பொறுப்பல்ல.`,
    `விண்ணப்பதாரர் நியமிக்கப்பட்ட நபரை (நாமினி) குறிப்பிட வேண்டும். எதிர்பாராத சூழ்நிலைகள் (எ.கா. மரணம்) ஏற்பட்டால், முதலீட்டு காலாவதியான பிறகு வைப்பு தொகை நாமினியின் கணக்கில் மாற்றப்படும்.`,
    `இந்த வைப்பு ரசீதானதை விண்ணப்பதாரர் பாதுகாத்து வைக்க வேண்டும்.`,
    `முதலீட்டு காலத்தின்போது முன்கூட்டியே தொகையை திரும்பப்பெற முடியும், ஆனால் ஒப்பந்தத்தின் அனைத்து விதிமுறைகளும் பூர்த்தி செய்யப்பட்ட பிறகு மட்டுமே.`,
    `முதலீட்டு இயக்க நேரத்தில், விண்ணப்பதாரர் தனது மொத்த முதலீட்டின் 75% வரை மதிப்பில் காப்பீடு இல்லாத கடனை பெற தகுதியானவராக இருக்கலாம். இது ஒப்பந்தத்தில் கூறப்பட்ட விதிமுறைகளுக்கு உட்பட்டது.`,
    `முதலீட்டை தொடர இயலாத நிலை ஏற்பட்டால், உங்கள் வேண்டுகோளின் அடிப்படையில் சரணைடையை செயல்படுத்தலாம். உங்கள் செலுத்திய தொகையின் 25% கழித்து மீதமுள்ள தொகை 15 நாட்களுக்குள் திருப்பித் தரப்படும்.`,
    `₹5 லட்சத்தைக் கடந்த முதலீட்டுகளுக்கு, முதலீட்டின் இரண்டாவது நாளிலிருந்து காலாவதிவரை, முதலீட்டு மதிப்பிற்குச் சமமான தனிப்பட்ட விபத்து காப்பீடு வழங்கப்படும்.`,
    `Neststar Capital Private Limited இவை விதிமுறைகளை எந்தவொரு அறிவிப்பும் இன்றி regulatory updates, செயல்பாட்டு தேவைகள், வணிக தேவைகள் போன்றவற்றுக்கேற்ப மாற்றும் உரிமையை வைத்துள்ளது. இவ்வாறான மாற்றங்கள் வெளியிடப்படும் தருணத்திலேயே அமலில் வரும்.`,
  ];

  return (
    <div className="bg-gray-50 px-4 py-8 sm:px-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Terms and Conditions / விதிமுறைகள்
        </h1>

        <section>
          <SectionHeader>English</SectionHeader>
          <TermsList terms={englishTerms} />
        </section>

        <section>
          <SectionHeader>தமிழ்</SectionHeader>
          <TermsList terms={tamilTerms} />
        </section>
      </div>
    </div>
  );
}
