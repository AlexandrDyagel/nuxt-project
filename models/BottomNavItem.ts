import type { Ref } from "vue";

export interface BottomNavItem {
  readonly name: string;
  readonly route: string;
  isActive: boolean;
  readonly icon: Ref;
}
