export type SingleEntry<T> = { type: 'single'; item: T }
export type GroupEntry<T> = { type: 'group'; groupId: string; items: T[] }
export type GroupedEntry<T> = SingleEntry<T> | GroupEntry<T>

export function groupByGroupId<T extends { groupId?: string }>(items: T[]): GroupedEntry<T>[] {
  const result: GroupedEntry<T>[] = []
  const groupMap = new Map<string, GroupEntry<T>>()

  for (const item of items) {
    if (!item.groupId) {
      result.push({ type: 'single', item })
    } else {
      if (!groupMap.has(item.groupId)) {
        const group: GroupEntry<T> = { type: 'group', groupId: item.groupId, items: [] }
        groupMap.set(item.groupId, group)
        result.push(group)
      }
      groupMap.get(item.groupId)!.items.push(item)
    }
  }

  return result
}
