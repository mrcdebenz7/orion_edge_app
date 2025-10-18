import { supaInsert, sendEmailResend } from '../tools';

export const sendCampaign = async (env: any, args: any) => {
    const leads = Array.isArray(args.leads) ? args.leads : [];
    const blocks = ['Draft email 1', 'Draft email 2'];
    let sent = 0;

    const minLength = Math.min(blocks.length, leads.length);

    if (args.send) {
        for (let i = 0; i < minLength; i++) {
            const lead = leads[i];
            const email = lead?.email;
            if (!email) continue;

            const html = `<p>${blocks[i]}</p>`;
            await sendEmailResend(env, String(email), args.subject || 'Hi', html);
            await supaInsert(env, 'outbox', {
                to_email: email,
                subject: args.subject,
                body_html: html,
                status: 'sent'
            });
            sent++;
        }
    } else {
        for (let i = 0; i < minLength; i++) {
            const lead = leads[i];
            const email = lead?.email;
            if (!email) continue;

            const html = `<p>${blocks[i]}</p>`;
            await supaInsert(env, 'outbox', {
                to_email: email,
                subject: args.subject,
                body_html: html,
                status: 'queued'
            });
        }
    }

    return { ok: true, drafted: blocks.length, sent };
};