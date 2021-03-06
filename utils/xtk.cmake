set(CTEST_PROJECT_NAME         "xtk")
set(CTEST_NIGHTLY_START_TIME   "01:00:00 CET")
set(CTEST_DROP_METHOD "http")
set(CTEST_DROP_SITE "cdash.goxtk.com")
set(CTEST_DROP_LOCATION "/submit.php?project=xtk")
set(CTEST_DROP_SITE_CDASH TRUE)

set(CTEST_SOURCE_DIRECTORY ".")
set(CTEST_BINARY_DIRECTORY ".")
set(CTEST_COMMAND "/usr/bin/ctest")

SET(filestosubmit "")

if(EXISTS "XTKUpdate.xml")
  SET(filestosubmit ${filestosubmit} "XTKUpdate.xml")
endif(EXISTS "XTKUpdate.xml")

if(EXISTS "XTKConf.xml")
  SET(filestosubmit ${filestosubmit} "XTKConf.xml")
endif(EXISTS "XTKConf.xml")

if(EXISTS "XTKBuild.xml")
  SET(filestosubmit ${filestosubmit} "XTKBuild.xml")
endif(EXISTS "XTKBuild.xml")

if(EXISTS "XTKTest.xml")
  SET(filestosubmit ${filestosubmit} "XTKTest.xml")
endif(EXISTS "XTKTest.xml")

ctest_submit(FILES ${filestosubmit})
