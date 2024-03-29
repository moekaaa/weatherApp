import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, fa } from 'vuetify/iconsets/fa';
import { VCalendar } from 'vuetify/labs/VCalendar';

const veautify = createVuetify({
  components: {
    components,
    VCalendar,
  },
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
