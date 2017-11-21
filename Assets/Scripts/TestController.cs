using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[RequireComponent(typeof(Rigidbody))]
public class TestController : MonoBehaviour {
    [SerializeField]
    float speed = 50;
    bool isRunning = false;

    Coroutine runCoroutine;

	void Start () {
        GetComponent<Rigidbody>().freezeRotation = true;
        runCoroutine = StartCoroutine(Run());
	}
	
	void Update () {
        if (Input.anyKey) {
            if (Input.GetKeyDown(KeyCode.Space))
            {
                isRunning = !isRunning;

                if (!isRunning)
                {
                    GetComponent<Rigidbody>().velocity = Vector3.zero;
                    GetComponent<Rigidbody>().angularVelocity = Vector3.zero;
                }
            }
        }
	}

    IEnumerator Run() {
        while (true)
        {
            if (isRunning)
            {
                Vector3 movement = new Vector3(Input.GetAxis("Horizontal"), 0, Input.GetAxis("Vertical"));
                movement = Vector3.Normalize(movement);

                GetComponent<Rigidbody>().AddForce(movement * speed);
            }

            yield return null;
        }
    }
}
