﻿private var anim : Animation;
var creak_noise : AudioClip;

private var Range = false;
private var State = 0;  //open = 1, close = 0

public var guiSkin : GUISkin;

function Start () 
{
	anim = GetComponent.<Animation>();
}

function Update () 
{
	if (Input.GetKeyDown(KeyCode.E) && Range == true && State == 0)
	{
	    anim.CrossFade("DoorOpen90");
        AudioSource.PlayClipAtPoint(creak_noise, GetComponent.<Collider>().transform.position);
        State = 1;
	}
    else if(Input.GetKeyDown(KeyCode.E) && Range == true && State == 1)
    {
        anim.CrossFade("DoorClose90");
        AudioSource.PlayClipAtPoint(creak_noise, GetComponent.<Collider>().transform.position);
        State = 0;
    }
}

function OnTriggerEnter (theCollider : Collider)
{
	if (theCollider.tag == "Player")
	{
		Range = true;
	}
}

function OnTriggerExit (theCollider : Collider)
{
	if (theCollider.tag == "Player")
	{
		Range = false;
	}
}

function OnGUI ()
{
    if (guiSkin != null) {
		GUI.skin = guiSkin;
	} else {
        if(Range && State == 0)
        {
            GUI.Label (Rect (Screen.width/2-100, (Screen.height/2)+175, 200, 50), "Press <b>E</b> to open <b>door</b>");
        }

        if(Range && State == 1)
        {
            GUI.Label (Rect (Screen.width/2-100, (Screen.height/2)+175, 200, 50), "Press <b>E</b> to close <b>door</b>");
        }
    }

}