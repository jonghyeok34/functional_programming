import { compose } from 'lodash/fp'

const slufigy = compose(
    encodeURIComponent,
    join('-'),
    map(toLowerCase),
    split(' ')
)

slufigy('Hello World')