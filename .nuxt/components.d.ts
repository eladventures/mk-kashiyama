
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'CommonsGenericPanel': typeof import("../src/components/commons/GenericPanel.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'HeadlessCombobox': typeof import("../node_modules/@headlessui/vue/dist/components/combobox/combobox")['Combobox']
    'HeadlessComboboxLabel': typeof import("../node_modules/@headlessui/vue/dist/components/combobox/combobox")['ComboboxLabel']
    'HeadlessComboboxButton': typeof import("../node_modules/@headlessui/vue/dist/components/combobox/combobox")['ComboboxButton']
    'HeadlessComboboxInput': typeof import("../node_modules/@headlessui/vue/dist/components/combobox/combobox")['ComboboxInput']
    'HeadlessComboboxOptions': typeof import("../node_modules/@headlessui/vue/dist/components/combobox/combobox")['ComboboxOptions']
    'HeadlessComboboxOption': typeof import("../node_modules/@headlessui/vue/dist/components/combobox/combobox")['ComboboxOption']
    'HeadlessDialog': typeof import("../node_modules/@headlessui/vue/dist/components/dialog/dialog")['Dialog']
    'HeadlessDialogOverlay': typeof import("../node_modules/@headlessui/vue/dist/components/dialog/dialog")['DialogOverlay']
    'HeadlessDialogBackdrop': typeof import("../node_modules/@headlessui/vue/dist/components/dialog/dialog")['DialogBackdrop']
    'HeadlessDialogPanel': typeof import("../node_modules/@headlessui/vue/dist/components/dialog/dialog")['DialogPanel']
    'HeadlessDialogTitle': typeof import("../node_modules/@headlessui/vue/dist/components/dialog/dialog")['DialogTitle']
    'HeadlessDialogDescription': typeof import("../node_modules/@headlessui/vue/dist/components/dialog/dialog")['DialogDescription']
    'HeadlessDisclosure': typeof import("../node_modules/@headlessui/vue/dist/components/disclosure/disclosure")['Disclosure']
    'HeadlessDisclosureButton': typeof import("../node_modules/@headlessui/vue/dist/components/disclosure/disclosure")['DisclosureButton']
    'HeadlessDisclosurePanel': typeof import("../node_modules/@headlessui/vue/dist/components/disclosure/disclosure")['DisclosurePanel']
    'HeadlessFocusTrap': typeof import("../node_modules/@headlessui/vue/dist/components/focus-trap/focus-trap")['FocusTrap']
    'HeadlessListbox': typeof import("../node_modules/@headlessui/vue/dist/components/listbox/listbox")['Listbox']
    'HeadlessListboxLabel': typeof import("../node_modules/@headlessui/vue/dist/components/listbox/listbox")['ListboxLabel']
    'HeadlessListboxButton': typeof import("../node_modules/@headlessui/vue/dist/components/listbox/listbox")['ListboxButton']
    'HeadlessListboxOptions': typeof import("../node_modules/@headlessui/vue/dist/components/listbox/listbox")['ListboxOptions']
    'HeadlessListboxOption': typeof import("../node_modules/@headlessui/vue/dist/components/listbox/listbox")['ListboxOption']
    'HeadlessMenu': typeof import("../node_modules/@headlessui/vue/dist/components/menu/menu")['Menu']
    'HeadlessMenuButton': typeof import("../node_modules/@headlessui/vue/dist/components/menu/menu")['MenuButton']
    'HeadlessMenuItems': typeof import("../node_modules/@headlessui/vue/dist/components/menu/menu")['MenuItems']
    'HeadlessMenuItem': typeof import("../node_modules/@headlessui/vue/dist/components/menu/menu")['MenuItem']
    'HeadlessPopover': typeof import("../node_modules/@headlessui/vue/dist/components/popover/popover")['Popover']
    'HeadlessPopoverButton': typeof import("../node_modules/@headlessui/vue/dist/components/popover/popover")['PopoverButton']
    'HeadlessPopoverOverlay': typeof import("../node_modules/@headlessui/vue/dist/components/popover/popover")['PopoverOverlay']
    'HeadlessPopoverPanel': typeof import("../node_modules/@headlessui/vue/dist/components/popover/popover")['PopoverPanel']
    'HeadlessPopoverGroup': typeof import("../node_modules/@headlessui/vue/dist/components/popover/popover")['PopoverGroup']
    'HeadlessPortal': typeof import("../node_modules/@headlessui/vue/dist/components/portal/portal")['Portal']
    'HeadlessPortalGroup': typeof import("../node_modules/@headlessui/vue/dist/components/portal/portal")['PortalGroup']
    'HeadlessRadioGroup': typeof import("../node_modules/@headlessui/vue/dist/components/radio-group/radio-group")['RadioGroup']
    'HeadlessRadioGroupOption': typeof import("../node_modules/@headlessui/vue/dist/components/radio-group/radio-group")['RadioGroupOption']
    'HeadlessRadioGroupLabel': typeof import("../node_modules/@headlessui/vue/dist/components/radio-group/radio-group")['RadioGroupLabel']
    'HeadlessRadioGroupDescription': typeof import("../node_modules/@headlessui/vue/dist/components/radio-group/radio-group")['RadioGroupDescription']
    'HeadlessSwitchGroup': typeof import("../node_modules/@headlessui/vue/dist/components/switch/switch")['SwitchGroup']
    'HeadlessSwitch': typeof import("../node_modules/@headlessui/vue/dist/components/switch/switch")['Switch']
    'HeadlessSwitchLabel': typeof import("../node_modules/@headlessui/vue/dist/components/switch/switch")['SwitchLabel']
    'HeadlessSwitchDescription': typeof import("../node_modules/@headlessui/vue/dist/components/switch/switch")['SwitchDescription']
    'HeadlessTabGroup': typeof import("../node_modules/@headlessui/vue/dist/components/tabs/tabs")['TabGroup']
    'HeadlessTabList': typeof import("../node_modules/@headlessui/vue/dist/components/tabs/tabs")['TabList']
    'HeadlessTab': typeof import("../node_modules/@headlessui/vue/dist/components/tabs/tabs")['Tab']
    'HeadlessTabPanels': typeof import("../node_modules/@headlessui/vue/dist/components/tabs/tabs")['TabPanels']
    'HeadlessTabPanel': typeof import("../node_modules/@headlessui/vue/dist/components/tabs/tabs")['TabPanel']
    'HeadlessTransitionChild': typeof import("../node_modules/@headlessui/vue/dist/components/transitions/transition")['TransitionChild']
    'HeadlessTransitionRoot': typeof import("../node_modules/@headlessui/vue/dist/components/transitions/transition")['TransitionRoot']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyCommonsGenericPanel': LazyComponent<typeof import("../src/components/commons/GenericPanel.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyHeadlessCombobox': LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/combobox/combobox")['Combobox']>
    'LazyHeadlessComboboxLabel': LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/combobox/combobox")['ComboboxLabel']>
    'LazyHeadlessComboboxButton': LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/combobox/combobox")['ComboboxButton']>
    'LazyHeadlessComboboxInput': LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/combobox/combobox")['ComboboxInput']>
    'LazyHeadlessComboboxOptions': LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/combobox/combobox")['ComboboxOptions']>
    'LazyHeadlessComboboxOption': LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/combobox/combobox")['ComboboxOption']>
    'LazyHeadlessDialog': LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/dialog/dialog")['Dialog']>
    'LazyHeadlessDialogOverlay': LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/dialog/dialog")['DialogOverlay']>
    'LazyHeadlessDialogBackdrop': LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/dialog/dialog")['DialogBackdrop']>
    'LazyHeadlessDialogPanel': LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/dialog/dialog")['DialogPanel']>
    'LazyHeadlessDialogTitle': LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/dialog/dialog")['DialogTitle']>
    'LazyHeadlessDialogDescription': LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/dialog/dialog")['DialogDescription']>
    'LazyHeadlessDisclosure': LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/disclosure/disclosure")['Disclosure']>
    'LazyHeadlessDisclosureButton': LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/disclosure/disclosure")['DisclosureButton']>
    'LazyHeadlessDisclosurePanel': LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/disclosure/disclosure")['DisclosurePanel']>
    'LazyHeadlessFocusTrap': LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/focus-trap/focus-trap")['FocusTrap']>
    'LazyHeadlessListbox': LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/listbox/listbox")['Listbox']>
    'LazyHeadlessListboxLabel': LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/listbox/listbox")['ListboxLabel']>
    'LazyHeadlessListboxButton': LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/listbox/listbox")['ListboxButton']>
    'LazyHeadlessListboxOptions': LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/listbox/listbox")['ListboxOptions']>
    'LazyHeadlessListboxOption': LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/listbox/listbox")['ListboxOption']>
    'LazyHeadlessMenu': LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/menu/menu")['Menu']>
    'LazyHeadlessMenuButton': LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/menu/menu")['MenuButton']>
    'LazyHeadlessMenuItems': LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/menu/menu")['MenuItems']>
    'LazyHeadlessMenuItem': LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/menu/menu")['MenuItem']>
    'LazyHeadlessPopover': LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/popover/popover")['Popover']>
    'LazyHeadlessPopoverButton': LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/popover/popover")['PopoverButton']>
    'LazyHeadlessPopoverOverlay': LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/popover/popover")['PopoverOverlay']>
    'LazyHeadlessPopoverPanel': LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/popover/popover")['PopoverPanel']>
    'LazyHeadlessPopoverGroup': LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/popover/popover")['PopoverGroup']>
    'LazyHeadlessPortal': LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/portal/portal")['Portal']>
    'LazyHeadlessPortalGroup': LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/portal/portal")['PortalGroup']>
    'LazyHeadlessRadioGroup': LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/radio-group/radio-group")['RadioGroup']>
    'LazyHeadlessRadioGroupOption': LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/radio-group/radio-group")['RadioGroupOption']>
    'LazyHeadlessRadioGroupLabel': LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/radio-group/radio-group")['RadioGroupLabel']>
    'LazyHeadlessRadioGroupDescription': LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/radio-group/radio-group")['RadioGroupDescription']>
    'LazyHeadlessSwitchGroup': LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/switch/switch")['SwitchGroup']>
    'LazyHeadlessSwitch': LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/switch/switch")['Switch']>
    'LazyHeadlessSwitchLabel': LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/switch/switch")['SwitchLabel']>
    'LazyHeadlessSwitchDescription': LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/switch/switch")['SwitchDescription']>
    'LazyHeadlessTabGroup': LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/tabs/tabs")['TabGroup']>
    'LazyHeadlessTabList': LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/tabs/tabs")['TabList']>
    'LazyHeadlessTab': LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/tabs/tabs")['Tab']>
    'LazyHeadlessTabPanels': LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/tabs/tabs")['TabPanels']>
    'LazyHeadlessTabPanel': LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/tabs/tabs")['TabPanel']>
    'LazyHeadlessTransitionChild': LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/transitions/transition")['TransitionChild']>
    'LazyHeadlessTransitionRoot': LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/transitions/transition")['TransitionRoot']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const CommonsGenericPanel: typeof import("../src/components/commons/GenericPanel.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const HeadlessCombobox: typeof import("../node_modules/@headlessui/vue/dist/components/combobox/combobox")['Combobox']
export const HeadlessComboboxLabel: typeof import("../node_modules/@headlessui/vue/dist/components/combobox/combobox")['ComboboxLabel']
export const HeadlessComboboxButton: typeof import("../node_modules/@headlessui/vue/dist/components/combobox/combobox")['ComboboxButton']
export const HeadlessComboboxInput: typeof import("../node_modules/@headlessui/vue/dist/components/combobox/combobox")['ComboboxInput']
export const HeadlessComboboxOptions: typeof import("../node_modules/@headlessui/vue/dist/components/combobox/combobox")['ComboboxOptions']
export const HeadlessComboboxOption: typeof import("../node_modules/@headlessui/vue/dist/components/combobox/combobox")['ComboboxOption']
export const HeadlessDialog: typeof import("../node_modules/@headlessui/vue/dist/components/dialog/dialog")['Dialog']
export const HeadlessDialogOverlay: typeof import("../node_modules/@headlessui/vue/dist/components/dialog/dialog")['DialogOverlay']
export const HeadlessDialogBackdrop: typeof import("../node_modules/@headlessui/vue/dist/components/dialog/dialog")['DialogBackdrop']
export const HeadlessDialogPanel: typeof import("../node_modules/@headlessui/vue/dist/components/dialog/dialog")['DialogPanel']
export const HeadlessDialogTitle: typeof import("../node_modules/@headlessui/vue/dist/components/dialog/dialog")['DialogTitle']
export const HeadlessDialogDescription: typeof import("../node_modules/@headlessui/vue/dist/components/dialog/dialog")['DialogDescription']
export const HeadlessDisclosure: typeof import("../node_modules/@headlessui/vue/dist/components/disclosure/disclosure")['Disclosure']
export const HeadlessDisclosureButton: typeof import("../node_modules/@headlessui/vue/dist/components/disclosure/disclosure")['DisclosureButton']
export const HeadlessDisclosurePanel: typeof import("../node_modules/@headlessui/vue/dist/components/disclosure/disclosure")['DisclosurePanel']
export const HeadlessFocusTrap: typeof import("../node_modules/@headlessui/vue/dist/components/focus-trap/focus-trap")['FocusTrap']
export const HeadlessListbox: typeof import("../node_modules/@headlessui/vue/dist/components/listbox/listbox")['Listbox']
export const HeadlessListboxLabel: typeof import("../node_modules/@headlessui/vue/dist/components/listbox/listbox")['ListboxLabel']
export const HeadlessListboxButton: typeof import("../node_modules/@headlessui/vue/dist/components/listbox/listbox")['ListboxButton']
export const HeadlessListboxOptions: typeof import("../node_modules/@headlessui/vue/dist/components/listbox/listbox")['ListboxOptions']
export const HeadlessListboxOption: typeof import("../node_modules/@headlessui/vue/dist/components/listbox/listbox")['ListboxOption']
export const HeadlessMenu: typeof import("../node_modules/@headlessui/vue/dist/components/menu/menu")['Menu']
export const HeadlessMenuButton: typeof import("../node_modules/@headlessui/vue/dist/components/menu/menu")['MenuButton']
export const HeadlessMenuItems: typeof import("../node_modules/@headlessui/vue/dist/components/menu/menu")['MenuItems']
export const HeadlessMenuItem: typeof import("../node_modules/@headlessui/vue/dist/components/menu/menu")['MenuItem']
export const HeadlessPopover: typeof import("../node_modules/@headlessui/vue/dist/components/popover/popover")['Popover']
export const HeadlessPopoverButton: typeof import("../node_modules/@headlessui/vue/dist/components/popover/popover")['PopoverButton']
export const HeadlessPopoverOverlay: typeof import("../node_modules/@headlessui/vue/dist/components/popover/popover")['PopoverOverlay']
export const HeadlessPopoverPanel: typeof import("../node_modules/@headlessui/vue/dist/components/popover/popover")['PopoverPanel']
export const HeadlessPopoverGroup: typeof import("../node_modules/@headlessui/vue/dist/components/popover/popover")['PopoverGroup']
export const HeadlessPortal: typeof import("../node_modules/@headlessui/vue/dist/components/portal/portal")['Portal']
export const HeadlessPortalGroup: typeof import("../node_modules/@headlessui/vue/dist/components/portal/portal")['PortalGroup']
export const HeadlessRadioGroup: typeof import("../node_modules/@headlessui/vue/dist/components/radio-group/radio-group")['RadioGroup']
export const HeadlessRadioGroupOption: typeof import("../node_modules/@headlessui/vue/dist/components/radio-group/radio-group")['RadioGroupOption']
export const HeadlessRadioGroupLabel: typeof import("../node_modules/@headlessui/vue/dist/components/radio-group/radio-group")['RadioGroupLabel']
export const HeadlessRadioGroupDescription: typeof import("../node_modules/@headlessui/vue/dist/components/radio-group/radio-group")['RadioGroupDescription']
export const HeadlessSwitchGroup: typeof import("../node_modules/@headlessui/vue/dist/components/switch/switch")['SwitchGroup']
export const HeadlessSwitch: typeof import("../node_modules/@headlessui/vue/dist/components/switch/switch")['Switch']
export const HeadlessSwitchLabel: typeof import("../node_modules/@headlessui/vue/dist/components/switch/switch")['SwitchLabel']
export const HeadlessSwitchDescription: typeof import("../node_modules/@headlessui/vue/dist/components/switch/switch")['SwitchDescription']
export const HeadlessTabGroup: typeof import("../node_modules/@headlessui/vue/dist/components/tabs/tabs")['TabGroup']
export const HeadlessTabList: typeof import("../node_modules/@headlessui/vue/dist/components/tabs/tabs")['TabList']
export const HeadlessTab: typeof import("../node_modules/@headlessui/vue/dist/components/tabs/tabs")['Tab']
export const HeadlessTabPanels: typeof import("../node_modules/@headlessui/vue/dist/components/tabs/tabs")['TabPanels']
export const HeadlessTabPanel: typeof import("../node_modules/@headlessui/vue/dist/components/tabs/tabs")['TabPanel']
export const HeadlessTransitionChild: typeof import("../node_modules/@headlessui/vue/dist/components/transitions/transition")['TransitionChild']
export const HeadlessTransitionRoot: typeof import("../node_modules/@headlessui/vue/dist/components/transitions/transition")['TransitionRoot']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyCommonsGenericPanel: LazyComponent<typeof import("../src/components/commons/GenericPanel.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyHeadlessCombobox: LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/combobox/combobox")['Combobox']>
export const LazyHeadlessComboboxLabel: LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/combobox/combobox")['ComboboxLabel']>
export const LazyHeadlessComboboxButton: LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/combobox/combobox")['ComboboxButton']>
export const LazyHeadlessComboboxInput: LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/combobox/combobox")['ComboboxInput']>
export const LazyHeadlessComboboxOptions: LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/combobox/combobox")['ComboboxOptions']>
export const LazyHeadlessComboboxOption: LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/combobox/combobox")['ComboboxOption']>
export const LazyHeadlessDialog: LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/dialog/dialog")['Dialog']>
export const LazyHeadlessDialogOverlay: LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/dialog/dialog")['DialogOverlay']>
export const LazyHeadlessDialogBackdrop: LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/dialog/dialog")['DialogBackdrop']>
export const LazyHeadlessDialogPanel: LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/dialog/dialog")['DialogPanel']>
export const LazyHeadlessDialogTitle: LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/dialog/dialog")['DialogTitle']>
export const LazyHeadlessDialogDescription: LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/dialog/dialog")['DialogDescription']>
export const LazyHeadlessDisclosure: LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/disclosure/disclosure")['Disclosure']>
export const LazyHeadlessDisclosureButton: LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/disclosure/disclosure")['DisclosureButton']>
export const LazyHeadlessDisclosurePanel: LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/disclosure/disclosure")['DisclosurePanel']>
export const LazyHeadlessFocusTrap: LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/focus-trap/focus-trap")['FocusTrap']>
export const LazyHeadlessListbox: LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/listbox/listbox")['Listbox']>
export const LazyHeadlessListboxLabel: LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/listbox/listbox")['ListboxLabel']>
export const LazyHeadlessListboxButton: LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/listbox/listbox")['ListboxButton']>
export const LazyHeadlessListboxOptions: LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/listbox/listbox")['ListboxOptions']>
export const LazyHeadlessListboxOption: LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/listbox/listbox")['ListboxOption']>
export const LazyHeadlessMenu: LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/menu/menu")['Menu']>
export const LazyHeadlessMenuButton: LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/menu/menu")['MenuButton']>
export const LazyHeadlessMenuItems: LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/menu/menu")['MenuItems']>
export const LazyHeadlessMenuItem: LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/menu/menu")['MenuItem']>
export const LazyHeadlessPopover: LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/popover/popover")['Popover']>
export const LazyHeadlessPopoverButton: LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/popover/popover")['PopoverButton']>
export const LazyHeadlessPopoverOverlay: LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/popover/popover")['PopoverOverlay']>
export const LazyHeadlessPopoverPanel: LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/popover/popover")['PopoverPanel']>
export const LazyHeadlessPopoverGroup: LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/popover/popover")['PopoverGroup']>
export const LazyHeadlessPortal: LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/portal/portal")['Portal']>
export const LazyHeadlessPortalGroup: LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/portal/portal")['PortalGroup']>
export const LazyHeadlessRadioGroup: LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/radio-group/radio-group")['RadioGroup']>
export const LazyHeadlessRadioGroupOption: LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/radio-group/radio-group")['RadioGroupOption']>
export const LazyHeadlessRadioGroupLabel: LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/radio-group/radio-group")['RadioGroupLabel']>
export const LazyHeadlessRadioGroupDescription: LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/radio-group/radio-group")['RadioGroupDescription']>
export const LazyHeadlessSwitchGroup: LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/switch/switch")['SwitchGroup']>
export const LazyHeadlessSwitch: LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/switch/switch")['Switch']>
export const LazyHeadlessSwitchLabel: LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/switch/switch")['SwitchLabel']>
export const LazyHeadlessSwitchDescription: LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/switch/switch")['SwitchDescription']>
export const LazyHeadlessTabGroup: LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/tabs/tabs")['TabGroup']>
export const LazyHeadlessTabList: LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/tabs/tabs")['TabList']>
export const LazyHeadlessTab: LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/tabs/tabs")['Tab']>
export const LazyHeadlessTabPanels: LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/tabs/tabs")['TabPanels']>
export const LazyHeadlessTabPanel: LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/tabs/tabs")['TabPanel']>
export const LazyHeadlessTransitionChild: LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/transitions/transition")['TransitionChild']>
export const LazyHeadlessTransitionRoot: LazyComponent<typeof import("../node_modules/@headlessui/vue/dist/components/transitions/transition")['TransitionRoot']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]
