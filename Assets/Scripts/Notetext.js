var guiSkin: GUISkin;
var NoteDisplay: GameObject;
var show : boolean;
var text : String;
var clip : AudioClip;

function ShowJunk(stat) {
	show = stat;
}

function Update () {

}

function OnGUI () {
	if(guiSkin != null) {
		GUI.skin = guiSkin;
	}
	if (show == true) {

		GUI.Label(Rect((Screen.width/2) - 200, (Screen.height/2) , 350, 450), text);
	}
}