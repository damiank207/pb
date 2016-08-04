import {Component} from 'angular2/core';
import {Config}  from './config.service';
import {Video} from './Video';
import {Book} from './Book';
import {PlaylistComponent} from './playlist.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives: [PlaylistComponent]
})

export class AppComponent {
    mainHeading = Config.MAIN_HEADING;
    videos:Array<Video>;
    books:Array<Book>;

    constructor(){
        this.videos = [
            new Video(1, "cośtam cośtam", "3cC2Nvf7Zb8", "sranie w banie"),
            new Video(2, "cośtam cośtam2", "3cC2Nvf7Zb9", "sranie w banie2")
        ]
    }
}
