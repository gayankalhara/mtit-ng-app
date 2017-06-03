import {Injectable} from '@angular/core'

@Injectable()
export class BaMsgCenterService {

  private _notifications = [
    {
      image: 'assets/img/comments.svg',
      text: 'New Invoice Templates are available',
      time: '3 days ago',
    },
  ];

  private _messages = [
    {
      name: 'default',
      text: 'Test Message',
      time: '1 min ago'
    },
  ];

  public getMessages():Array<Object> {
    return this._messages;
  }

  public getNotifications():Array<Object> {
    return this._notifications;
  }
}
