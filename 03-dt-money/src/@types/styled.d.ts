import 'styled-components';
import { defaultTheme } from '../styles/themes/default';

type ThemeType = typeof defaultTheme

declare module 'styled-componets'{
    export interface defaultTheme extends ThemeType {}
}
