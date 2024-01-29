interface SubContent {
    id: number
    text: string
}

interface ContentWithSubContent {
    title: string
    content: SubContent[]
    showContent: string[]
}

export const tabContents: ContentWithSubContent[] = [
    {
        title: 'How to Get Started & TPM Areas',
        content: [
            { id: 1, text: 'How easy is it to get started?' },
            { id: 2, text: 'Does the apartment have to be fully furnished?' },
            { id: 3, text: 'Area Coverage anywhere?' },
            { id: 4, text: 'What type of contract should I sign?' }
        ],
        showContent: [
            'Just fill in the registration form, our team will immediately contact you within 1 x 24 working days regarding the contract, unit standardization, unit cleaning and unit arrangement so that it meets unit photo standards, unit photography, pricing, until your property is ready to be marketed on S - HOME and distributed to several other leading online channels! All this in just a few weeks! Dont forget, if your unit meets our standards, it can speed up the process of marketing your property on our website and other websites. Register now at: www.S - HOME.com/tpm',
            'Im well! Apartment management by S - HOME can carry out exclusive marketing for Fully Furnish and Unfurnish (Empty) Apartments.',
            'Pengelolaan Apartemen oleh S - HOME dapat membantu pemasaran unit anda di area Jabodetabek, Bandung, Surabaya, Makassar, Semarang, dan Jogjakarta. Apabila anda memiliki unit dengan quantity yang banyak, anda dapat menginformasikan kepada tim kami untuk pembahasan lebih lanjut.',
            'Exclusive marketing cooperation contract for your unit. The duration of the contract can be adjusted to suit your needs. Starting from 12 months to 18 months.'
        ]
    },
    {
        title: 'Apartment Management Services by S - HOME',
        content: [
            {
                id: 5,
                text: 'What does Apartment Management by S - HOME do for Property Owners?'
            },
            {
                id: 6,
                text: 'How do you advertise my property and do I need to pay for this?'
            },
            { id: 7, text: 'What kind of report do I get from my unit?' }
        ],
        showContent: [
            'We help you manage your property from A to Z, starting from unit standardization, cleaning, photography, content writing, marketing, managing reservations, check in, check out, unit maintenance (ac servicing and other light maintenance), handling guest complaints. You as the unit owner dont need to do all this yourself, we do it for you! Dont worry, the maintenance costs are also listed in your units monthly report.',
            'We will market your unit on our website, namely www.S - HOME.com, as well as other online and offline sites. We have a Channel Manager so that marketing can be done on several online channels and there are no additional costs for this marketing facility.',
            'You will get a monthly report containing your rental income, expenses for the unit, tax deductions that occurred in that month, payments for electricity and water from guests. All of that can be accessed via the owners Liopartner App.'
        ]
    },
    {
        title: 'Property List & Standardization',
        content: [
            { id: 8, text: 'What if my property is already listed on another site?' },
            {
                id: 9,
                text: 'Do I have to commit to a certain amount of availability for my property?'
            },
            { id: 10, text: 'Is there any standardization for my property?' },
            {
                id: 11,
                text: 'What are the steps to register with Apartment Management by S - HOME until my unit is ready to be marketed?'
            },
            { id: 12, text: 'How long does the process take?' }
        ],
        showContent: [
            'The cooperation contract between S - HOME and the owner is exclusive. We will carry out marketing to other channels, so that the owner no longer needs to continue marketing. We will re-photograph your unit, and re-check your unit so that it complies with the standards set by S - HOME.',
            'The minimum cooperation contract with S - HOME is only 12 months.',
            'S - HOME has a standardization reference for units. This standardization is determined for marketing which is not only on a daily basis, but also on a monthly and annual basis. Standardization is required in terms of electronic goods, the condition of the unit (structurally) in a clean and good condition, cooking equipment, eating equipment, cleaning equipment.',
            'Contract Signing. Submission of Documents & Handover of Keys and Unit Access. Unit Standardization. Unit Cleaning. otoshoot Unit. Content Writing. Live on www.S - HOME.com and other channels',
            'How long the process takes depends on how quickly the Unit Owner can complete the owners obligations. If unit standards have been met, your unit will be available within 7 working days'
        ]
    },
    {
        title: 'Guests & Payments',
        content: [
            {
                id: 13,
                text: 'How do guests interact with Apartment Management by S - HOME?'
            },
            { id: 14, text: 'How do guests pay?' },
            { id: 15, text: 'When does the landlord get paid for the rent?' },
            { id: 16, text: 'What if my unit is damaged by a tenant?' },
            { id: 17, text: 'What is the insurance coverage?' },
            { id: 18, text: 'What about cleaning fees?' }
        ],
        showContent: [
            'We have several ways for guests to communicate with us such as our website, live chat via the live chat feature, WhatsApp, and email. In addition to these channels, our customer service is available every day from 7.00 am to 1 am.',
            'Payment can be made using credit cards, bank transfers, virtual accounts and also internet banking. Guests must make payment first before receiving booking confirmation. Guest payments can also be made in Full Payment, or Installment Payment.',
            'Owners will receive payment from S - HOME no later than the 15th of every month. Transactions dated 1-31 of the current month will be paid to the Owner on the 15th of the following month. Rental payments to the unit owner are based on the payment method chosen by the guest.',
            'We will inspect your unit immediately after guests check-out. If we find damage, we will make a deduction from the guests deposit that was paid in advance. If the deposit amount is not enough to cover the damage, the guest must make an additional payment to cover the damage. In addition, all unit owners who join Apartment Management by S - HOME are obliged to register insurance in accordance with our program. This insurance covers Property All Risk and Public Liability. If your unit is a vacant unit, the insurance covers Public Liability only.',
            'Property All Risk: Damage/loss caused by guests which is sudden and unintentional. Not due to depreciation or damage due to use/age.Public Liability: Protection against claims from third parties/guests regarding guest safety/guest security.',
            'Biaya kebersihan ditanggung oleh tamu berdasarkan per pemesanan. Biaya kebersihan ini termasuk penggantian atas seluruh linen yang ada di unit, pencucian piring dan alat alat masak, serta menyapu dan mengepel unit anda agar siap disewakan kepada tamu yang baru.'
        ]
    },
    {
        title: 'Prices & Fees',
        content: [
            { id: 19, text: 'Registration fee :' },
            { id: 20, text: 'Why do you have to pay a registration fee:' },
            { id: 21, text: 'How is profit sharing implemented with S - HOME?' },
            { id: 22, text: 'How do you determine the rental price?' },
            { id: 23, text: 'What happens if my unit needs repair?' },
            {
                id: 24,
                text: 'What about the technicalities of IPL, Water Electricity and Internet payments?'
            }
        ],
        showContent: [
            'Registration of your unit at S - HOME will be subject to a 1 x registration fee as long as you join Apartment Management by S - HOME',
            'By paying the registration fee, your unit will get the benefits below:',
            'We implement a sharing commission system (profit sharing), there are no fixed fees that you have to pay to S - HOME every month, so the commission we get depends on the transaction on the rental value that occurs. The greater the rental value, of course the greater the commission we get, and vice versa.',
            'We implement a Dynamic Pricing system where pricing will be adjusted to several factors, namely: Market Price, Occupancy Level in your unit, Occupancy Level in the building, Market Conditions. Season Period (Low Season/Peak Season)',
            'Guest deposits only cover damage caused by guests. However, wear and tear, structural repairs or depreciation of goods will be repaired by the owner. If the repair is worth less than 1 million rupiah, S - HOME will carry out the repair without asking for confirmation from the owner. Meanwhile, if the repair is worth more than 1 million rupiah, S - HOME will confirm it with the unit owner.',
            'For daily guests: The owner will make monthly payment obligations to the relevant vendor. -For monthly guests: The marketed rental price includes IPL and internet, excluding electricity and water. The owner makes the payment as usual first, then uploads the electricity and water bill via the Liopartner App so that S - HOME can bill guests for the guests electricity and water usage. -For annual guests: Marketed rental prices do not include IPL, electricity, water and internet. Internet disconnection can be done by the owner. Guests will make payments for these monthly obligations to Building Management. Owners can carry out routine checks with Building Management regarding guest payments and inform our team if there are any arrears/bills that have not been paid so that they can be conveyed to guests.'
        ]
    },
    {
        title: 'Security',
        content: [
            {
                id: 25,
                text: 'Im not comfortable giving my keys to strangers, how do you keep my property safe?'
            }
        ],
        showContent: [
            'Apartment management by S - HOME uses digital keys with a special code that will be issued per booking. The key is provided by us and is lent as long as your unit is still part of Apartment Management by S - HOME. Codes will also be given to cleaning staff when they carry out cleaning in units with different formats, so that in this case tracking in and out of the unit can be tracked and unit security can be maintained.'
        ]
    },
    {
        title: 'Property Regulations',
        content: [
            { id: 26, text: 'Will my unit only be marketed daily/monthly/yearly?' },
            { id: 27, text: 'How can I enter my property?' },
            {
                id: 28,
                text: 'How is the Digital Lock (Smart Door Lock) installed on my unit?'
            }
        ],
        showContent: [
            'No! The advantage of Apartment Management by S - HOME is daily, monthly and annual rental. We will market your unit optimally, so that you as the Unit Owner get wider potential by opening daily, monthly and yearly rentals. For empty apartments, we will market them with a minimum rental of 3 months to yearly.If special conditions occur in the Owners Apartment building which cannot be rented out on a daily basis then we will refer to the provisions of each regulation in that Apartment.',
            'You can make reservations for your unit via the Liopartner application which is provided for unit owners who have joined Apartment Management by S - HOME. As long as your unit is available, you can make the reservation and only pay the Cleaning Fee. Cleaning Fee is applied per booking not per day.',
            'Installation of Digital Locks is prioritized for units that are considered more operationally necessary and will not be installed for units that are prohibited from replacing or installing Digital Locks from Building Management.'
        ]
    }
    // ... other tabs
]
