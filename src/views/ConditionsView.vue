<template>
    <div class="legal-layout container">
        <main class="policy-content">
            <h1>{{ $t('terms_conditions.title') }}</h1>

            <p class="last-updated">
                {{ $t('terms_conditions.last_updated') }}
            </p>

            <p>{{ $t('terms_conditions.introduction') }}</p>

            <h2>{{ $t('terms_conditions.sections.about.title') }}</h2>
            <p>{{ $t('terms_conditions.sections.about.description') }}</p>
            <ul>
                <li>
                    <strong>{{ $t('terms_conditions.sections.about.company_label') }}</strong>
                    {{ $t('terms_conditions.sections.about.company') }}
                </li>
                <li>
                    <strong>{{ $t('terms_conditions.sections.about.location_label') }}</strong>
                    {{ $t('terms_conditions.sections.about.location') }}
                </li>
                <li>
                    <strong>{{ $t('terms_conditions.sections.about.email_label') }}</strong>
                    <a href="mailto:info@chacracoffee.com">info@chacracoffee.com</a>
                </li>
                <li>
                    <strong>{{ $t('terms_conditions.sections.about.whatsapp_label') }}</strong>
                    <a href="https://wa.me/51937791406">+51 937 791 406</a>
                </li>
            </ul>

            <h2>{{ $t('terms_conditions.sections.acceptance.title') }}</h2>
            <p>{{ $t('terms_conditions.sections.acceptance.description') }}</p>
            <ul>
                <li>{{ $t('terms_conditions.sections.acceptance.items.age') }}</li>
                <li>{{ $t('terms_conditions.sections.acceptance.items.authority') }}</li>
                <li>{{ $t('terms_conditions.sections.acceptance.items.agreement') }}</li>
                <li>{{ $t('terms_conditions.sections.acceptance.items.privacy') }}</li>
            </ul>
            <p>{{ $t('terms_conditions.sections.acceptance.disclaimer') }}</p>

            <h2>{{ $t('terms_conditions.sections.products.title') }}</h2>
            <p>{{ $t('terms_conditions.sections.products.description') }}</p>
            <ul>
                <li>
                    <strong>{{ $t('terms_conditions.sections.products.items.coffee_label') }}</strong>
                    {{ $t('terms_conditions.sections.products.items.coffee') }}
                </li>
                <li>
                    <strong>{{ $t('terms_conditions.sections.products.items.samples_label') }}</strong>
                    {{ $t('terms_conditions.sections.products.items.samples') }}
                </li>
                <li>
                    <strong>{{ $t('terms_conditions.sections.products.items.offers_label') }}</strong>
                    {{ $t('terms_conditions.sections.products.items.offers') }}
                </li>
                <li>
                    <strong>{{ $t('terms_conditions.sections.products.items.notifications_label') }}</strong>
                    {{ $t('terms_conditions.sections.products.items.notifications') }}
                </li>
            </ul>
            <p>{{ $t('terms_conditions.sections.products.evaluation') }}</p>
            <p>
                <strong>{{ $t('terms_conditions.sections.products.availability_label') }}</strong>
                {{ $t('terms_conditions.sections.products.availability') }}
            </p>

            <h2>{{ $t('terms_conditions.sections.orders.title') }}</h2>
            <p>{{ $t('terms_conditions.sections.orders.description') }}</p>
            <ul>
                <li>
                    <strong>{{ $t('terms_conditions.sections.orders.items.pricing_label') }}</strong>
                    {{ $t('terms_conditions.sections.orders.items.pricing') }}
                </li>
                <li>
                    <strong>{{ $t('terms_conditions.sections.orders.items.minimum_label') }}</strong>
                    {{ $t('terms_conditions.sections.orders.items.minimum') }}
                </li>
                <li>
                    <strong>{{ $t('terms_conditions.sections.orders.items.confirmation_label') }}</strong>
                    {{ $t('terms_conditions.sections.orders.items.confirmation') }}
                </li>
                <li>
                    <strong>{{ $t('terms_conditions.sections.orders.items.currency_label') }}</strong>
                    {{ $t('terms_conditions.sections.orders.items.currency') }}
                </li>
                <li>
                    <strong>{{ $t('terms_conditions.sections.orders.items.samples_label') }}</strong>
                    {{ $t('terms_conditions.sections.orders.items.samples') }}
                </li>
            </ul>

            <h2>{{ $t('terms_conditions.sections.payment.title') }}</h2>
            <p>{{ $t('terms_conditions.sections.payment.description') }}</p>
            <ul>
                <li>
                    <strong>{{ $t('terms_conditions.sections.payment.items.deposit_label') }}</strong>
                    {{ $t('terms_conditions.sections.payment.items.deposit') }}
                </li>
                <li>
                    <strong>{{ $t('terms_conditions.sections.payment.items.balance_label') }}</strong>
                    {{ $t('terms_conditions.sections.payment.items.balance') }}
                </li>
                <li>
                    <strong>{{ $t('terms_conditions.sections.payment.items.transfer_label') }}</strong>
                    {{ $t('terms_conditions.sections.payment.items.transfer') }}
                </li>
                <li>
                    <strong>{{ $t('terms_conditions.sections.payment.items.late_label') }}</strong>
                    {{ $t('terms_conditions.sections.payment.items.late') }}
                </li>
                <li>
                    <strong>{{ $t('terms_conditions.sections.payment.items.charges_label') }}</strong>
                    {{ $t('terms_conditions.sections.payment.items.charges') }}
                </li>
            </ul>

            <h2>{{ $t('terms_conditions.sections.shipping.title') }}</h2>
            <p>{{ $t('terms_conditions.sections.shipping.description') }}</p>
            <ul>
                <li>
                    <strong>{{ $t('terms_conditions.sections.shipping.items.documentation_label') }}</strong>
                    {{ $t('terms_conditions.sections.shipping.items.documentation') }}
                </li>
                <li>
                    <strong>{{ $t('terms_conditions.sections.shipping.items.lead_times_label') }}</strong>
                    {{ $t('terms_conditions.sections.shipping.items.lead_times') }}
                </li>
                <li>
                    <strong>{{ $t('terms_conditions.sections.shipping.items.stock_label') }}</strong>
                    {{ $t('terms_conditions.sections.shipping.items.stock') }}
                </li>
                <li>
                    <strong>{{ $t('terms_conditions.sections.shipping.items.customs_label') }}</strong>
                    {{ $t('terms_conditions.sections.shipping.items.customs') }}
                </li>
                <li>
                    <strong>{{ $t('terms_conditions.sections.shipping.items.risk_label') }}</strong>
                    {{ $t('terms_conditions.sections.shipping.items.risk') }}
                </li>
                <li>
                    <strong>{{ $t('terms_conditions.sections.shipping.items.delays_label') }}</strong>
                    {{ $t('terms_conditions.sections.shipping.items.delays') }}
                </li>
            </ul>

            <h2>{{ $t('terms_conditions.sections.quality.title') }}</h2>
            <p>{{ $t('terms_conditions.sections.quality.description') }}</p>
            <ul>
                <li>
                    <strong>{{ $t('terms_conditions.sections.quality.items.samples_label') }}</strong>
                    {{ $t('terms_conditions.sections.quality.items.samples') }}
                </li>
                <li>
                    <strong>{{ $t('terms_conditions.sections.quality.items.guarantee_label') }}</strong>
                    {{ $t('terms_conditions.sections.quality.items.guarantee') }}
                </li>
                <li>
                    <strong>{{ $t('terms_conditions.sections.quality.items.moisture_label') }}</strong>
                    {{ $t('terms_conditions.sections.quality.items.moisture') }}
                </li>
                <li>
                    <strong>{{ $t('terms_conditions.sections.quality.items.claims_label') }}</strong>
                    {{ $t('terms_conditions.sections.quality.items.claims') }}
                </li>
                <li>
                    <strong>{{ $t('terms_conditions.sections.quality.items.returns_label') }}</strong>
                    {{ $t('terms_conditions.sections.quality.items.returns') }}
                </li>
            </ul>

            <h2>{{ $t('terms_conditions.sections.intellectual.title') }}</h2>
            <p>{{ $t('terms_conditions.sections.intellectual.description') }}</p>
            <ul>
                <li>{{ $t('terms_conditions.sections.intellectual.items.reproduction') }}</li>
                <li>{{ $t('terms_conditions.sections.intellectual.items.sharing') }}</li>
                <li>{{ $t('terms_conditions.sections.intellectual.items.trademark') }}</li>
            </ul>

            <h2>{{ $t('terms_conditions.sections.liability.title') }}</h2>
            <p>{{ $t('terms_conditions.sections.liability.description') }}</p>
            <ul>
                <li>{{ $t('terms_conditions.sections.liability.items.damages') }}</li>
                <li>{{ $t('terms_conditions.sections.liability.items.limit') }}</li>
                <li>{{ $t('terms_conditions.sections.liability.items.website') }}</li>
                <li>{{ $t('terms_conditions.sections.liability.items.information') }}</li>
            </ul>

            <h2>{{ $t('terms_conditions.sections.law.title') }}</h2>
            <p>{{ $t('terms_conditions.sections.law.description') }}</p>
            <p>{{ $t('terms_conditions.sections.law.contracts') }}</p>
            <p>{{ $t('terms_conditions.sections.law.disputes') }}</p>

            <h2>{{ $t('terms_conditions.sections.changes.title') }}</h2>
            <p>{{ $t('terms_conditions.sections.changes.description') }}</p>
            <p>{{ $t('terms_conditions.sections.changes.continued_use') }}</p>

            <h2>{{ $t('terms_conditions.sections.contact.title') }}</h2>
            <p>{{ $t('terms_conditions.sections.contact.description') }}</p>
            <p>
                <strong>{{ $t('terms_conditions.sections.contact.company') }}</strong><br>
                {{ $t('terms_conditions.sections.contact.address') }}<br>
                {{ $t('terms_conditions.sections.contact.email_label') }}
                <a href="mailto:info@chacracoffee.com">info@chacracoffee.com</a><br>
                {{ $t('terms_conditions.sections.contact.whatsapp_label') }}
                <a href="https://wa.me/51937791406">+51 937 791 406</a>
            </p>
        </main>
    </div>
</template>