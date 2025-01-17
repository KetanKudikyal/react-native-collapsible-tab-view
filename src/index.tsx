import { Container } from './Container'
import { FlashList } from './FlashList'
import { FlatList } from './FlatList'
import { Lazy } from './Lazy'
import { MaterialTabBarProps, MaterialTabItemProps } from './MaterialTabBar'
import { ScrollView } from './ScrollView'
import { SectionList } from './SectionList'
import { Tab } from './Tab'
import {
  TabBarProps,
  CollapsibleProps,
  RefComponent,
  ContainerRef,
  CollapsibleRef,
  OnTabChangeCallback,
  TabItemProps,
  TabProps,
} from './types'

export type {
  TabBarProps,
  CollapsibleProps,
  RefComponent,
  ContainerRef,
  MaterialTabBarProps,
  MaterialTabItemProps,
  CollapsibleRef,
  OnTabChangeCallback,
  TabItemProps,
  TabProps,
}

export const Tabs = {
  Container,
  Tab,
  Lazy,
  FlatList,
  ScrollView,
  FlashList,
  SectionList,
}

export { Container, Tab, Lazy, FlatList, ScrollView, SectionList }
export {
  useCurrentTabScrollY,
  useHeaderMeasurements,
  useFocusedTab,
  useAnimatedTabIndex,
  useAfterMountEffect,
  useChainCallback,
  useCollapsibleStyle,
  useConvertAnimatedToValue,
  useScrollHandlerY,
  useSharedAnimatedRef,
  useTabNameContext,
  useTabsContext,
  useUpdateScrollViewContentSize,
} from './hooks'
export type { HeaderMeasurements } from './hooks'

export { MaterialTabBar } from './MaterialTabBar/TabBar'
export { MaterialTabItem } from './MaterialTabBar/TabItem'
