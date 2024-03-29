import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, fa } from 'vuetify/iconsets/fa';
import { VCalendar } from 'vuetify/labs/VCalendar';
import { VIcon } from 'vuetify/components';

/// Calendarコンポーネントを追加しただけなので、気にしないで！
const customComponents = {
  ...components,
  VCalendar,
};

const veautify = createVuetify({
  components: customComponents,
  directives,
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
    },
  },
});

export default veautify;
