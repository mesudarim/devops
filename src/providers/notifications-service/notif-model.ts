export interface INotifItem{
 id: number,
 title?: string,
 text: string,
 firstAt?: string, // monday_9_am,
 every?: string, // "week",
 sound?: string, // Default -> isAndroid? 'file://sound.mp3': 'file://beep.caf',
 icon?: string, // "http://icons.com/?cal_id=1"
 data: { secret: string }
}
