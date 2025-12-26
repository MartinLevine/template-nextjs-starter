import { useState } from 'react'

import { Mail, mails } from './data'

type Config = {
    selected: Mail['id'] | null
}

export function useMail() {
    const state = useState<Config>({
        selected: mails[0].id
    })
    return state
}
