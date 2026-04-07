import type {ref} from 'vue'

export interface UseMouseReturn {
    x: Ref<number>,
    y: Ref<number>
}

export function useMouse(): UseMouseReturn