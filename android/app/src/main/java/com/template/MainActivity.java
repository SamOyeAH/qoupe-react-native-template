package com.ahold.my.test.app;
import android.os.Bundle;
import com.facebook.react.ReactActivity;
import com.facebook.react.BuildConfig;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "myTestApp";
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }
}
