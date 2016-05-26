var guiSkin : GUISkin;

var NoteDisplay : GameObject;

function Start () {
    NoteDisplay.active = true;
}

function Update () {

}

function OnGUI()
{
    if (guiSkin != null) {
		GUI.skin = guiSkin;
	}
    if(NoteDisplay.active == true){
        GUI.Label (Rect ((Screen.width/2) - 25, (Screen.height/2) - 50, 200, 50), "Note Text");
    }
}